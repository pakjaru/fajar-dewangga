export interface WorkItemProps {
  /**
   * Project's Image
   */
  image: string
  
  /**
   * Project's Name
   */
  title: string

  /**
   * Project's Category
   */
  category: "website" | "mobile"

  /**
   * Project's description
   */
  description: string

  /**
   * Project's Technologies
   */
  techs: string[]

  /**
   * Project's Url
   */
  url: string

  /**
   * Project's Github Repository
   */
  github?: string

  /**
   * Component's Extra Class
   */
  extraClass?: string
}