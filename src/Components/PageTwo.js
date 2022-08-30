import React from "react";
import * as S from "../Style/PageOneStyle";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Section>
        <S.H2>How many tenses does the verb "do" have?</S.H2>
        <p>3 forms</p>
        <S.H2>What does the verb "Have" indicate as a main position?</S.H2>
        <p>Form of possession</p>
        <S.H2>
          Create two sentences with cognate words for "joy" and "sadness"
        </S.H2>
        <p> In joy and in sadness it's you and me!</p>
        <S.H2>
          What is the difference between the verb "will" and "going to"?
        </S.H2>
        <p>
          Will - Future simple (requisição/afirmação direta/capacidade) x Going
          to - Future Simple tense - (Intenção/Predicação)
        </p>
        <S.H2>Name four interrogative pronouns (Em inglês)</S.H2>
        <p>When</p>
        <p>Wich</p>
        <p>Why</p>
        <p>How</p>
        <S.H2>How many types of adverbs are there in English?</S.H2>
        <p>Five types</p>
      </S.Section>
      <S.Box>
        <S.H3>Create a sentence for an adverb of time (Em inglês)</S.H3>
        <p>Friends since 2011</p>
        <S.H3>Create a mnemonic phrase (Em inglês)</S.H3>
        <p>One three, three two one, all over two.</p>
      </S.Box>
    </S.Container>
  );
}
