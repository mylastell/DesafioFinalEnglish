import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Header>
        <S.H1>FINAL ENGLISH CHALLENGE</S.H1>
      </S.Header>
      <S.Section>
        <S.H2>What "HTTPS" means?</S.H2>
        <p>
          É a abreviação de Hyper Text Transfer Protocol Secure, significa que
          foi adicionado uma camada de segurança no site.
        </p>
        <S.H2>Stateless is...?</S.H2>
        <p>
          É um processo ou aplicação que nenhuma referencia ou informação de
          transações anteriores é armazenado. Todas são iniciadas do zero.
        </p>
        <S.H2>Subjective pronouns are used to indicate what?</S.H2>
        <p>Para indicar uma ação </p>
        <S.H2>Could, Should and Would are know as...?</S.H2>
        <p>modal verbs</p>
        <S.H2>What Should means?</S.H2>
        <p>Desejos, conselhos e sugestões</p>
        <S.H2>*EM PORTUGUÊS* - Construa essas seguintes frases em inglês:</S.H2>
      </S.Section>
      <S.Div>
        <S.Ul>
          <li>1 - Vamos falar coisas ótimas sobre você!</li>
          <p>Let's say great things about you</p>
          <li>2 - Ele vai para a Bahia mês que vem</li>
          <p>He goes to Bahia next month</p>
          <li>3 - Ela estará ai amanhã</li>
          <p>She will be there tomorrow</p>
        </S.Ul>
      </S.Div>
      <S.Box>
        <S.H3>Who is the subject of the sentence?</S.H3>
        <S.P>They gime me all the power</S.P>
        <p>R: They</p>
        <S.H3>Conjugate the verb to be in the past tense (Em inglês)</S.H3>
        <p>I was You wer He was She was It was We were You were They were</p>
        <S.H3>
          Build two sentences using "this" and "that", in the plural (Em inglês)
          <p>These are my notes.</p>
          <p>Those are my brothers.</p>
        </S.H3>
      </S.Box>
    </S.Container>
  );
}
