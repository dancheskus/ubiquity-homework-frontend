export default function TempButton({ buttonName, onClick }: { buttonName: string; onClick: any }) {
  return (
    <button
      style={{ padding: '1.5rem', borderRadius: '5px', background: '#c4c4c4', cursor: 'pointer' }}
      type='button'
      onClick={onClick}
    >
      {buttonName}
    </button>
  )
}
