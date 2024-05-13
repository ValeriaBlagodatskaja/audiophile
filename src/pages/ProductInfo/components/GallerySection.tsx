interface GallerySectionProps {
  galleryImages: {
    lg: string
    md: string
    sm: string
  }[]
}

export default function GallerySection({ galleryImages }: GallerySectionProps) {
  const displayedImages = galleryImages.slice(0, 2)

  const thirdImage = galleryImages[2]

  return (
    <div className="flex flex-col gap-5 md:flex-row lg:gap-[30px]">
      <div className="flex flex-col gap-5 md:justify-center lg:gap-[30px]">
        {displayedImages.map((galleryImage, index) => (
          <picture key={index}>
            <source media="(min-width:1100px)" srcSet={galleryImage.lg} />
            <source media="(min-width:768px)" srcSet={galleryImage.md} />
            <img className="rounded-lg " srcSet={galleryImage.sm} />
          </picture>
        ))}
      </div>
      {thirdImage && (
        <picture>
          <source media="(min-width:1100px)" srcSet={thirdImage.lg} />
          <source media="(min-width:768px)" srcSet={thirdImage.md} />
          <img className="rounded-lg" srcSet={thirdImage.sm} />
        </picture>
      )}
    </div>
  )
}
