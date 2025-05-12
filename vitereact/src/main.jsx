import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// 📊 Comparativo
// 
// | Lib     | Curva de aprendizado | Tamanho do app ideal | DevTools  | Performance |
// |---------|-----------------------|----------------------|-----------|-------------|
// | Jotai   | 0                    | Pequeno/Médio        | Simples   | Alta        |
// | Zustand | Baixa                | Médio/Grande         | Boas      | Alta        |
// | Redux   | Média/Alta           | Grande               | Excelente | Média       |

createRoot(document.getElementById('start')).render(
  <StrictMode>
        <App  />
  </StrictMode>
)
