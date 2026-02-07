import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Notifications } from './components/root/organism/notifications/notifications'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Optihome')
}
