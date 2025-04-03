function SectionTitle({ title, desc }) {
  return (
    <div className="flex flex-col gap-3 mb-14 justify-center text-center">
      <h3 className="text-sm uppercase font-light text-primaryColor tracking-wide">{title}</h3>
      <h1 className="text-5xl capitalize font-extrabold text-lightColor tracking-wide">{desc}</h1>
    </div>
  )
}

export default SectionTitle