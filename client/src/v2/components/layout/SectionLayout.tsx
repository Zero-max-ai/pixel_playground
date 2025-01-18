interface SectionLayoutProps {
  children: React.ReactNode
  background?: string
}

const SectionLayout: React.FC<SectionLayoutProps> = ({children, background}) => {
  return (
    <div className={`sm:pt-20 sm:pb-10 pt-16 pb-10: ${background}`}>
      {children}
    </div>
  )
}

export default SectionLayout;
