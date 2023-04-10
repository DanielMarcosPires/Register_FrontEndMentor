import React from "react";
import style from "./scss/style.module.scss";

import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
export default function ErrorPage() {
  return (
    <div className={style.errorPage}>
      <h2 className={style.errorPage__title}>Página não encontrado</h2>
      <p className={style.errorPage__text}>
        Clique para voltar <FaArrowRight />
        <Link className={style.errorPage__Link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
