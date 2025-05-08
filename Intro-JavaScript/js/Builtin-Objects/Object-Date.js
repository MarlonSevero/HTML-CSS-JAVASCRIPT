/* 
O objeto Date em JavaScript permite trabalhar com datas e horas — você pode criar datas, 
extrair partes como ano ou dia, e fazer cálculos com tempo.

📆 Métodos para obter partes da data

let data = new Date();

    data.getFullYear();     // Ano (ex: 2025)
    data.getMonth();        // Mês (0 = Janeiro, 11 = Dezembro)
    data.getDate();         // Dia do mês (1–31)
    data.getDay();          // Dia da semana (0 = Domingo, 6 = Sábado)

    data.getHours();        // Hora (0–23)
    data.getMinutes();      // Minutos (0–59)
    data.getSeconds();      // Segundos (0–59)
    data.getMilliseconds(); // Milissegundos (0–999)

    data.getTime();         // Timestamp (ms desde 1 Jan 1970)

🛠 Métodos para definir partes da data

    data.setFullYear(2026);
    data.setMonth(5);          // Junho (0 = Jan)
    data.setDate(15);          // Dia do mês
    data.setHours(14);
    data.setMinutes(30);
    data.setSeconds(0);

🌐 Outros métodos úteis

    data.toString();           // Representação completa como string
    data.toDateString();       // Apenas a data
    data.toTimeString();       // Apenas a hora
    data.toISOString();        // Formato padrão internacional (UTC)
    data.toLocaleDateString(); // Data local no formato do navegador
    data.toLocaleTimeString(); // Hora local

*/

let agora = new Date();
console.log(`Hoje é: ${agora.getDate()}/${agora.getMonth()+1}/${agora.getFullYear()}`);