import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MenuComponent", () => {

  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MenuComponent]
    });

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
