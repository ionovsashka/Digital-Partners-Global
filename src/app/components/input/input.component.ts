import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() text!: string
  @Input() id!: string
  @Input() itsTextarea: boolean = false

  public value: string | undefined
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public onInputValueChange(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    this.onChange(value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  public writeValue(value: string): void {
    this.value = value
    this.changeDetector.detectChanges()
  }

}
