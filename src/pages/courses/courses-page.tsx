import { useCourses } from './use-courses'

export function CoursesPage() {
  const { courses, isLoading, isError } = useCourses()

  if (isError) {
    return (
      <div className="flex items-center justify-center flex-1">
        <div className="text-sm text-muted-foreground">
          <p>Oops, something went wrong while loading courses.</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <div className="text-sm text-muted-foreground">
          <p>Loading courses...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl px-6 py-20 mx-auto">
        <header className="mb-20">
          <h1 className="mb-3 text-3xl font-light tracking-tight text-gray-900">
            Courses
          </h1>
          <p className="text-base font-light text-gray-500">
            Available learning materials
          </p>
        </header>

        <div className="space-y-12">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group"
            >
              <div className="pb-12 space-y-4 border-b border-gray-50 last:border-b-0">
                <h2 className="text-xl font-medium leading-tight text-gray-900 transition-colors duration-200 group-hover:text-gray-700">
                  {course.attributes.title}
                </h2>

                {course.attributes.summary ? (
                  <p className="leading-relaxed text-gray-600 max-w-prose">
                    {course.attributes.summary}
                  </p>
                ) : null}

                <div className="flex items-center gap-6 text-sm font-light text-gray-400">
                  {course.attributes.category ? (
                    <span className="tracking-wide capitalize">
                      {course.attributes.category}
                    </span>
                  ) : null}
                  {course.attributes.duration ? (
                    <span>{course.attributes.duration} min</span>
                  ) : null}
                  {course.attributes.difficulty ? (
                    <span>Level {course.attributes.difficulty}</span>
                  ) : null}
                  {course.attributes.price > 0 ? (
                    <span className="font-medium text-gray-600">
                      ${course.attributes.price}
                    </span>
                  ) : null}
                </div>

                {course.attributes.tags && course.attributes.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {course.attributes.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium tracking-wide text-gray-600 rounded-full bg-gray-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {!courses.length && !isLoading ? (
          <div className="py-24 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50">
              <div className="w-6 h-6 border-2 border-gray-300 border-dashed rounded"></div>
            </div>
            <p className="font-light text-gray-400">No courses available</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
