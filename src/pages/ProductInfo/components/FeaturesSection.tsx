import Typography from '@/components/Typography'
import { motion } from 'framer-motion'
import React from 'react'

interface FeaturesSectionProps {
  features: string
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const renderFeatures = (featuresText: string) => {
    const lines = featuresText.split('\n')
    let totalWords = 0
    return lines.map((line, lineIndex) => {
      const words = line.split(' ')
      totalWords += words.length
      return (
        <React.Fragment key={lineIndex}>
          {words.map((word, wordIndex) => (
            <motion.span
              initial={{ opacity: 0 }}
              key={totalWords - words.length + wordIndex}
              transition={{
                delay: (totalWords - words.length + wordIndex) / 10,
                duration: 0.25,
              }}
              whileInView={{ opacity: 1 }}
            >
              {word}{' '}
            </motion.span>
          ))}
          <br />
        </React.Fragment>
      )
    })
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
