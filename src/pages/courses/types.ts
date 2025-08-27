export type CourseModel = {
  id: string
  type: 'course'
  relationships: {
    stages: {
      links: {
        self: string
        related: string
      }
    }
  }
  attributes: CourseAttributesModel
}

export type CourseAttributesModel = {
  'updated-at': string
  'created-at': string
  'deleted-at': string | null
  title: string
  slug: string
  summary: string
  description: string
  privacy: 'public' | 'private'
  price: number
  featured: boolean
  duration: number
  difficulty: number
  'course-type': string
  'course-number': string
  category: string
  tags: string[]
  languages: string[]
  'key-takeaways': string[]
  'image-info': ImageInfoModel
}

export type ImageInfoModel = {
  thumb2x: ImageResourceModel
  thumb: ImageResourceModel
  square2x: ImageResourceModel
  square: ImageResourceModel
  fbshare: ImageResourceModel
}

export type ImageResourceModel = {
  width: number
  height: number
  url: string
}
