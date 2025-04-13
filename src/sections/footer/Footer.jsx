import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  return (
    <section>
      <div className="text-center py-6 lg:py-8 text-xs md:text-sm lg:text-base text-gray-500">
        &copy; {new Date().getFullYear()}. {t("footer.rights")}{" "}
        <a href="https://www.linkedin.com/in/abdelaziz/" target="_blank"
          className="text-primaryColor">
          {t('footer.myName')}
        </a>
      </div>
    </section>
  )
}

export default Footer