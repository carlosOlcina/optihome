import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Notification } from './notification'
import { NotificationEnum } from '../../../../config/enums/notification-enum'
import { describe, it, expect, beforeEach } from 'vitest'
import { By } from '@angular/platform-browser'

describe('NotificationComponent', () => {
  let component: Notification
  let fixture: ComponentFixture<Notification>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notification],
    }).compileComponents()

    fixture = TestBed.createComponent(Notification)
    component = fixture.componentInstance
  })

  it('should render correct icon for Success type', () => {
    // Act
    fixture.componentRef.setInput('type', NotificationEnum.Success)
    fixture.detectChanges()

    // Assert
    const icon = fixture.debugElement.query(By.css('lucide-icon'))
    expect(icon.componentInstance.img).toBe(component.circleCheckIcon)
    expect(icon.componentInstance.color).toBe('#4CAF50')
  })

  it('should render correct icon for Error type', () => {
    // Act
    fixture.componentRef.setInput('type', NotificationEnum.Error)
    fixture.detectChanges()

    // Assert
    const icon = fixture.debugElement.query(By.css('lucide-icon'))
    expect(icon.componentInstance.img).toBe(component.circleXIcon)
    expect(icon.componentInstance.color).toBe('#F44336')
  })

  it('should render correct icon for Warning type', () => {
    // Act
    fixture.componentRef.setInput('type', NotificationEnum.Warning)
    fixture.detectChanges()

    // Assert
    const icon = fixture.debugElement.query(By.css('lucide-icon'))
    expect(icon.componentInstance.img).toBe(component.circleAlertIcon)
    expect(icon.componentInstance.color).toBe('#FFC107')
  })
})
