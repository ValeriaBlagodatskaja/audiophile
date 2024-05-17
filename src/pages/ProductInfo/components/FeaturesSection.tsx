import Typography from '@/components/Typography'
import { motion } from 'framer-motion'
import React from 'react'

interface FeaturesSectionProps {
  features: string
}
export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const renderFeatures = (featuresText: string) => {
    let wordCounter = 0

    return featuresText.split('\n').map((line, lineIndex) => {
      const words = line.split(' ')
      return (
        <React.Fragment key={lineIndex}>
          {words.map((word, wordIndex) => {
            const delay = wordCounter * 0.1
            wordCounter += 1
            return (
              <motion.span
                initial={{ opacity: 0 }}
                key={`${lineIndex}-${wordIndex}`}
                transition={{
                  delay,
                  duration: 0.25,
                }}
                viewport={{ amount: 0.2, once: true }}
                whileInView={{ opacity: 1 }}
              >
                {word}{' '}
              </motion.span>
            )
          })}
          <br />
        </React.Fragment>
      )
    })
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        transition={{
          delay: 0.8,
          ease: 'easeInOut',
        }}
        viewport={{ amount: 0.2, once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <Typography as="h3" variant="24px-32px">
          Features
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          delay: 1,
          ease: 'easeInOut',
        }}
        viewport={{ amount: 0.2, once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Typography as="p" className="w-full pt-6 opacity-50" variant="15px">
          {renderFeatures(features)}
        </Typography>
      </motion.div>
    </div>
  )
}
