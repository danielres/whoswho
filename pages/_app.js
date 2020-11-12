import "../styles/tailwind.css";
import "../styles/forms.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container m-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
