interface GallerySectionProps {
  galleryImageThird: {
    lg: string
    md: string
    sm: string
  }
  galleryImages: {
    lg: string
    md: string
    sm: string
  }[]
}

export default function GallerySection({
  galleryImageThird,
  galleryImages,
}: GallerySectionProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row lg:gap-[30px]">
      <div className="flex flex-col gap-5 md:justify-center lg:gap-[30px]">
        {galleryImages.map((galleryImage, index) => (
          <picture key={index}>
            <source media="(min-width:1100px)" srcSet={galleryImage.lg} />
            <source media="(min-width:768px)" srcSet={galleryImage.md} />
            <img className="rounded-lg " srcSet={galleryImage.sm} />
          </picture>
        ))}
      </div>
      <picture>
        <source media="(min-width:1100px)" srcSet={galleryImageThird.lg} />
        <source media="(min-width:768px)" srcSet={galleryImageThird.md} />
        <img className="rounded-lg" srcSet={galleryImageThird.sm} />
      </picture>
    </div>
  )
}
