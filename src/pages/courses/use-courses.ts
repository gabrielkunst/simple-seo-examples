import { useEffect, useState } from 'react'
import type { CourseModel } from './types'

const COURSES_API_URL = 'https://api.mike.works/api/v1/courses'

export function useCourses() {
  const [courses, setCourses] = useState<CourseModel[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(COURSES_API_URL)
        const data = await response.json()

        setCourses(data.data)
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return {
    courses,
    isLoading,
  }
}
