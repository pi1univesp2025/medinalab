//import { Component } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, HttpClientModule],
})
export class AdminComponent {
  
  usuario: string = '';
  senha: string = '';

  //constructor(private http: HttpClient) {}
  private http = inject(HttpClient);
  private router = inject(Router);

  fazerLogin() {
    const url = `http://projetop1medinalab.rf.gd/login.php?usuario=${this.usuario}&senha=${this.senha}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }
        return response.text();
      })
      .then(text => {
        try {
          const data = JSON.parse(text);
  
          if (data.status === 'sucesso') {
            //alert(`✅ ${data.mensagem}\nID do usuário: ${data.id}`);
            localStorage.setItem('usuarioId', data.id);
            alert(`✅ ${data.mensagem}`);
            this.router.navigate(['/team']); // Redireciona para a página home
          } else {
            alert(`❌ Falha no login: ${data.mensagem || 'Usuário ou senha inválidos'}`);
          }
        } catch (e) {
          console.error('Erro ao processar a resposta JSON:', e);
          alert('⚠️ Resposta inesperada do servidor:\n' + text);
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        alert(`Erro de conexão: ${error.message}`);
      });
  }

}
