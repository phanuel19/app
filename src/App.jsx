import './App.css';
import About from './components/About/About';
import { useForm } from 'react-hook-form';
import { IconContext } from "react-icons";
import { RiPlantFill } from "react-icons/ri";
import styles from './LoginForm.module.css';
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier l'état dans localStorage au chargement
    const savedState = localStorage.getItem("isLoggedIn");
    if (savedState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Sauvegarder l'état dans localStorage et changer l'état local
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  function LoginForm() {
    const { register, formState: { errors } } = useForm();

    return (
      <div className={styles.container}>
        <div className={styles.imageBlock}></div>
        <div className={styles.formBlock}>
          <form className={styles.form}>
            <div className={styles.logoBlock}>
              <IconContext.Provider value={{ size: 30 }}>
                <RiPlantFill className={styles.logoImg} />
              </IconContext.Provider>
              <h1 className={styles.logo}>NOVA</h1>
            </div>

            <input {...register('name')} placeholder="Nom" className={styles.input} />
            <input
              {...register('email', { required: true })}
              placeholder="email"
              className={styles.input}
            />
            {errors.email && <p className={styles.error}>Email is required.</p>}

            <input
              {...register('password', { required: true })}
              placeholder="password"
              className={styles.input}
            />
            {errors.password && <p className={styles.error}>Password is required.</p>}

            <input
              type="button"
              className={styles.submit}
              value="Submit"
              onClick={handleLogin}
            />
          </form>
        </div>
      </div>
    );
  }

  // Afficher LoginForm si l'utilisateur n'est pas connecté, sinon About
  return isLoggedIn ? <About /> : <LoginForm />;
}

export default App;
