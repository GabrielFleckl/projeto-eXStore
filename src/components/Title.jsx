function Title({title, secondary}) {
  return <h1 className={`${secondary ? "font-bold text-4xl text-white" : "font-bold text-4xl text-primaryBlack"}`}>{title}</h1>
}

export default Title

