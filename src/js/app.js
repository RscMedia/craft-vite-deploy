if (import.meta.hot) {
    import.meta.hot.accept(() => {
      console.log("HMR")
    });
}

import '../css/app.css';
