import CardsSection from './CardsSection';

export default function CardsSectionContent() {
  const sectionTitleObj = {
    title01: "Малярные товары",
    title02: "Электрооборудование",
    title03: "Спецодежда",
    title04: "Для дома и дачи",
    title05: "Сезонное",
    title06: "Инструмент"
  }

  return (
    <div className='pt-3 pb-5 bg-slate-100 mx-auto'>
      <div className='container_content grid grid-cols-1 xl:grid-cols-2  gap-3'>
        <CardsSection  sectionTitleObj={sectionTitleObj.title01}/>
        <CardsSection sectionTitleObj={sectionTitleObj.title02} />
        <CardsSection sectionTitleObj={sectionTitleObj.title03} />
        <CardsSection sectionTitleObj={sectionTitleObj.title04} />
        <CardsSection sectionTitleObj={sectionTitleObj.title05} />
        <CardsSection sectionTitleObj={sectionTitleObj.title06} />
      </div>
    </div>
  )
}