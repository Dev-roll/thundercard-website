import Head from 'next/head'
import { config } from '@site.config'

type Props = {
  title: string
  path?: string
  description?: string
  ogImageUrl?: string
  noindex?: boolean
  removeSiteNameFromTitle?: boolean
  children?: React.ReactNode
}

const SeoHead = (props: Props) => {
  const {
    path,
    title,
    description,
    ogImageUrl,
    noindex,
    removeSiteNameFromTitle,
    children,
  } = props

  const pageUrl = `${config.siteRoot}${path || ''}`

  return (
    <Head>
      <title>
        {removeSiteNameFromTitle
          ? title
          : `${title} | ${config.siteMeta.title}`}
      </title>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site" content={config.siteMeta.title} />
      <meta
        property="og:image"
        content={ogImageUrl || `${config.siteRoot}/og.png`}
      />
      <meta
        name="description"
        content={description || config.siteMeta.description}
      />
      <meta
        property="og:description"
        content={description || config.siteMeta.description}
      />
      {path && <link rel="canonical" href={pageUrl} />}
      {noindex && <meta name="robots" content="noindex" />}
      {children}
    </Head>
  )
}

export default SeoHead
