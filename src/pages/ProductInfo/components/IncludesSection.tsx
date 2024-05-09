import Typography from '@/components/Typography'

interface IncludesSectionProps {
  includes: { item: string; quantity: number }[]
}

export default function IncludesSection({ includes }: IncludesSectionProps) {
  return (
    <div className="flex flex-col gap-6  md:flex-row md:gap-[170px]  lg:w-full lg:flex-col lg:gap-8 ">
      <Typography as="h3" variant="24px-32px">
        In the box
      </Typography>
      <ul>
        {includes.map((include, index) => (
          <li className="flex space-x-6" key={index}>
            <Typography as="p" className=" text-orange-dark" variant="15px">
              {include.quantity}x{' '}
            </Typography>
            <Typography as="p" className="opacity-50" variant="15px">
              {include.item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}
