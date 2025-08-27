import type { CourseModel } from './types'

type LoadCoursesResponse = CourseModel[]

export async function loadCourses(): Promise<LoadCoursesResponse> {
  const response = await fetch('https://api.mike.works/api/v1/courses')
  const jsonData = await response.json()

  return jsonData.data
}
