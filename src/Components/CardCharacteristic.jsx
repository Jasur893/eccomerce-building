export default function CardCharacteristic(props) {
  return (
    <table>
      <tbody>
        <tr className=''>
        <td className='pr-4'>
          {Object.keys(props?.characteristic).map((item, idx) => (
            <p className='mb-0 font-semibold' key={idx}>{item}: </p>
          ))}
        </td>
        <td className=''>
          {Object.values(props?.characteristic).map((item, idx) => (
            <p className='mb-0' key={idx}>{item}</p>
          ))}
        </td>
        </tr>
    </tbody>
    </table>
  )
}