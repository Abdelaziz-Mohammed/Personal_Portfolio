function Footer() {
  return (
    <section>
      <div className="text-center py-8 text-base text-gray-500">
        &copy; {new Date().getFullYear()}. All rights reserved by {" "}
        <a href="https://www.linkedin.com/in/abdelaziz/" target="_blank"
          className="text-primaryColor">
          Abdelaziz Mohamed
        </a>
      </div>
    </section>
  )
}

export default Footer