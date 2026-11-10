// --- CONFIGURACAO DA DATA DE NAMORO (Ano, Mes [0-11], Dia, Hora, Minutos) ---
// Altere para a sua data real de namoro abaixo:
const dataNamoro = new Date(2026, 10, 1, 20, 0, 0); 

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = 
        `${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`;
}
setInterval(atualizarContador, 1000);

// --- SISTEMA JOGO INTERATIVO (QUIZ) ---
let etapa = 1;

function checkAnswer(isCorrect) {
    const feedback = document.getElementById('feedback');
    
    if (etapa === 1) {
        if (isCorrect) {
            feedback.innerHTML = "<span style='color: var(--clove-cyan);'>Correto. Aceitou o fato de que e mandona. Proxima fase...</span>";
            setTimeout(() => {
                etapa = 2;
                document.getElementById('question').innerText = "Desafio Final: Se voce morrer no Valorant hoje a noite, qual a desculpa oficial?";
                document.getElementById('options-container').innerHTML = `
                    <button class="btn" onclick="checkAnswer(true)">"Culpa do Lag / Meu time nao joga junto"</button>
                    <button class="btn" onclick="checkAnswer(false)">"Eu joguei mal e tive skill issue"</button>
                `;
                feedback.innerHTML = "";
            }, 2000);
        }
    } else if (etapa === 2) {
        if (isCorrect) {
            feedback.innerHTML = "<span style='color: var(--clove-pink);'>[UTILIZOU NOT DEAD YET!] Voce reviveu com sucesso e ganhou o premio maximo!</span>";
            setTimeout(() => {
                document.getElementById('quiz-section').innerHTML = `
                    <h2 class="reward-title">\u{1F451} RECOMPENSA DESBLOQUEADA \u{1F451}</h2>
                    <p style="font-size: 1.1rem; color: #fff;">Parabens nerd, voce completou o bando de piratas e garantiu o seu passe.</p>
                    <div class="reward-box">
                        <h3 style="margin: 0; color: gold;">VALE-LANCHE DA REALEZA</h3>
                        <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Valido para um rodizio/jantar por minha conta, sem direito a reclamacoes.</p>
                    </div>
                    <p style="font-size: 0.8rem; color: #888;">(Tire um print para resgatar com o suporte, vulgo eu).</p>
                `;
            }, 2000);
        } else {
            feedback.innerHTML = "<span style='color: red;'>ERRO. Uma Clove de verdade nunca admite que errou. Tente de novo, noob!</span>";
        }
    }
}

function fogeBotao() {
    const btnNo = document.getElementById('btn-nao');
    if (!btnNo) return;
    btnNo.style.position = 'absolute';
    
    const x = Math.random() * (window.innerWidth < 500 ? 100 : 200) - 100;
    const y = Math.random() * 150 - 75;
    
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// --- CONTROLE CUSTOMIZADO DA MUSICA ---
function alternarMusica() {
    const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('music-toggle-btn');

    if (audio.paused) {
        audio.play();
        btn.innerHTML = "&#x1F4BF; Pausar Musica";
        btn.classList.add('playing');
    } else {
        audio.pause();
        btn.innerHTML = "&#x1F3B5; Ligar Trilha Sonora (MHRAP)";
        btn.classList.remove('playing');
    }
}
