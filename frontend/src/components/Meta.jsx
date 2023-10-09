import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To MaxMayShop",
  description: "We sell the best products for cheap",
  keywords: "phone, phones, electronics, buy electronics, cheap electroincs",
};

export default Meta;
