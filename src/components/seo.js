import * as React from 'react'
import useSiteMetadata from '../hooks/siteMetadata'

const Seo = ({ title }) => {
  return (
    <title>{title} | {useSiteMetadata().title}</title>
  )
}

export default Seo