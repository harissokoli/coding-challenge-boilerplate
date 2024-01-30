import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs as BreadcrumbsMUI, Container, Link } from '@mui/material'

const Breadcrumbs = () => {
  const { pathname } = useLocation()

  const [pageTitle, setPageTitle] = useState<string>('')

  useEffect(() => {
    if (pathname.startsWith('/edit')) {
      setPageTitle('Edit')
    } else {
      setPageTitle('Home')
    }
  }, [pathname])

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 2, marginTop: 2 }}>
      <BreadcrumbsMUI separator={'>'}>
        <Link underline="hover" key="1" color="inherit" href="/">
          Task Management
        </Link>
        <Link underline="hover" color="inherit">
          {pageTitle}
        </Link>
      </BreadcrumbsMUI>
    </Container>
  )
}

export default Breadcrumbs
