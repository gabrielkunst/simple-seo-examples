import { useEffect, useState } from 'react'
import { loadCourses } from './load-courses'
import type { CourseModel } from './types'

export function useCourses() {
  const [courses, setCourses] = useState<CourseModel[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)

      try {
        const courses = await loadCourses()
        setCourses(courses)
      } catch (error) {
        console.error('Error loading courses:', error)
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchCourses()
  }, [])

  return {
    courses,
    isLoading,
    isError,
  }
}
