const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const total = Object.values(faturamentoMensal).reduce((acc, curr) => acc + curr);
  
  const percentuais = {};
  
  for (let estado in faturamentoMensal) {
    const percentual = (faturamentoMensal[estado] / total) * 100;
    percentuais[estado] = percentual.toFixed(2);
  }
  
  console.log(percentuais);
  