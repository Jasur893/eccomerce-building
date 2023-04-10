export default function CardCharacteristic(props) {
  console.log(props.characteristic);
  

  return (
    <table className='w-full'>
      <tbody >
        {/* eslint-disable-next-line */}
        {Object.keys(props.characteristic).map((key, idx) => {
          if(key && props.characteristic[key]){
            return (
              <tr key={idx} className='border'>
                <td className='pl-1 pr-2 py-1'>{String(key).replaceAll('_', " ")}</td>
                <td className='pr-1'>{props.characteristic[key]}</td>
              </tr>
            )
          }
        })}
    </tbody>
    </table>
  )
}