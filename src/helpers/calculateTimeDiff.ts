export default function calculateTimeDiff(fecha: string | Date) {
  
  const oldDate  = new Date(fecha);
  const currentDate = new Date(); 

  // Calcula la diferencia en milisegundos
  const differenceInMilliseconds = currentDate.getTime() - oldDate.getTime()

  // Convierte la diferencia a segundos
  const seconds = Math.floor(differenceInMilliseconds / 1000);

  const res = { hot: false, time: '' }

  if (seconds < 60) {

    res.hot = true
    res.time = `Hace ${seconds} seg`
    return res

  } else if (seconds < 3600) {

    const minutos = Math.floor(seconds / 60);
    res.hot = true
    res.time = `Hace ${minutos} min`
    return res

  } else if (seconds < 86400) {

    const horas = Math.floor(seconds / 3600);
    res.hot = true
    res.time = `Hace ${horas} horas`
    return res

  } else if (seconds < 604800) {

    const dias = Math.floor(seconds / 86400);
    res.hot = true
    res.time = `Hace ${dias} días`;
    return res
    
  } else {

    const week = Math.floor(seconds / 604800);
    
    if (week < 4) {
      
      res.hot = false
      res.time = `Hace ${week} semanas`;
      return res

    } else {
      
      const months = Math.floor(week / 4);

      if (months < 12) {
          res.hot = false
          res.time =`Hace ${months} meses`;
          return res

      } else {
          const years = Math.floor(months / 12);
          res.hot = false
          res.time =`Hace ${years} años`;
          return res
      }
    }
  }
}