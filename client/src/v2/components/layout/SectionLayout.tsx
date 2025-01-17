interface SectionLayoutProps {
  children: React.ReactNode
  background?: string
}

const SectionLayout: React.FC<SectionLayoutProps> = ({children, background}) => {
  return (
    <div className={`py-40 ${background}`}>
      {children}
    </div>
  )
}

export default SectionLayout;
