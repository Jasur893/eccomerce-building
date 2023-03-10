import bgAbout01 from '../assets/news/bgAbout01.png'

export default function News() {
  return (
    <div className='bg-slate-100'>
      <div className='container_content'>
        <p className='pt-3 text-3xl font-medium w-[55%]'>Cпрос на инструменты для домохозяйств вырос на 38% за год</p>
      </div>
      <div className='bg-cover'>
        <img src={bgAbout01} className='w-full ' alt="img"/>
      </div>
      <div className='container_content py-4'>
        <p className=''>Онлайн — гипермаркет товаров для дома, дачи, строительства и ремонта проанализировал спрос на аккумуляторные, ручные и электроинструменты в октябре 2021 и сравнил эти цифры с аналогичным периодом 2020 года. Этой осенью товары данной категории россияне покупали чаще на 38%.</p>
        <p className='mb-0'>«На рост спроса в категории инструментов могли повлиять несколько факторов. В 2021 году в России выросли объёмы ввода жилья почти на 30%, что привело к увеличению количества ремонтов в новых квартирах. Также в этом году россияне признались, что стали экономить на ремонте и по возможности проводить его самостоятельно. В связи с этим многим из них потребовался свой инструмент», — комментирует руководитель пресс-службы «Инструменты.ру» Сергей Денисенко</p>
      </div>
      <div className='bg-white pt-3'>
        <div className='container_content'>
          <h5>Онлайн — гипермаркет проанализировал спрос:</h5>
          <p>— Заполненное и подписанное заявление о государственной регистрации прекращения деятельности физических лиц в качестве ИП — форма № R26001.;</p>
          <p>— Документ об уплате госпошлины в размере 160 ₽;</p>
          <p>— Документ об уплате госпошлины в размере 160 ₽;</p>
          <p>— Документ, подтверждающий предоставление информации в территориальный орган ПФР.;</p>
          <p>— Заполненное и подписанное заявление о государственной регистрации прекращения деятельности физических лиц в качестве ИП — форма № R26001.;</p>
          <p>— Документ об уплате госпошлины в размере 160 ₽;</p>
          <p>— Документ, подтверждающий предоставление информации в территориальный орган ПФР.;</p>
        </div>
      </div>
    </div>
  )
}






