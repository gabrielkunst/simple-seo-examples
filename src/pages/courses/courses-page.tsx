import { useCourses } from './use-courses'

export function CoursesPage() {
  const { courses, isLoading } = useCourses()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <header className="mb-20">
          <h1 className="text-3xl font-light text-gray-900 mb-3 tracking-tight">
            Courses
          </h1>
          <p className="text-gray-500 text-base font-light">
            Available learning materials
          </p>
        </header>

        <div className="space-y-12">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group"
            >
              <div className="space-y-4 pb-12 border-b border-gray-50 last:border-b-0">
                <h2 className="text-xl font-medium text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-200">
                  {course.attributes.title}
                </h2>

                {course.attributes.summary ? (
                  <p className="text-gray-600 leading-relaxed max-w-prose">
                    {course.attributes.summary}
                  </p>
                ) : null}

                <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
                  {course.attributes.category ? (
                    <span className="capitalize tracking-wide">
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
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium tracking-wide"
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
          <div className="text-center py-24">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-gray-300 rounded border-dashed"></div>
            </div>
            <p className="text-gray-400 font-light">No courses available</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
