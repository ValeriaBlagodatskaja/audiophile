import React from 'react'

import Typography from '../../../components/Typography'

interface FeaturesSectionProps {
  features: string
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const renderFeatures = (featuresText: string) => {
    return featuresText.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }
  return (
    <div>
      <Typography as="h3" variant="24px-32px">
        Features
      </Typography>

      <Typography as="p" className="w-full pt-6 opacity-50" variant="15px">
        {renderFeatures(features)}
      </Typography>
    </div>
  )
}
