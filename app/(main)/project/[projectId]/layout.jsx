import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'

const ProjectLayout=async({children})=> {
  return (
    <div className="container mx-auto px-4">
        <Suspense fallback={<span>Loading projects...</span>}>
        {children}
        </Suspense>
        </div>
  )
}

export default ProjectLayout