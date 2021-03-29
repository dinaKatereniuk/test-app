import { HttpResponse } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";

import { AuthMockService, User } from "./auth-mock.service";

describe("AuthMockService", () => {
  let service: AuthMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMockService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return user after success login", fakeAsync(() => {
    let user: User;
    service
      .login("Bret", "password")
      .subscribe((response) => (user = response.body));

    tick(400);
    expect(user).not.toBeNull();
    expect(user).toBeDefined();
    expect(user.username).toBe("Bret");
  }));

  it("should return user without password", fakeAsync(() => {
    let user: any;
    service
      .login("Bret", "password")
      .subscribe((response) => (user = response.body));

    tick(400);
    expect(user.password).toBeUndefined();
  }));

  it("should throw an error when credentials are not matching any user", fakeAsync(() => {
    service.login("invalid", "password").subscribe(
      () => null,
      (error: HttpResponse<any>) => {
        expect(error.status).toBe(401);
        expect(error.body).toBe("Invalid credentials");
      }
    );
    tick(400);
  }));
});
