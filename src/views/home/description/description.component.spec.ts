import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DescriptionComponent } from "./description.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DescriptionComponent", () => {

  let fixture: ComponentFixture<DescriptionComponent>;
  let component: DescriptionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DescriptionComponent]
    });

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
