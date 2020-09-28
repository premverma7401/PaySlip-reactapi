using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class updatedMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeContract",
                columns: table => new
                {
                    EmployeeContractId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContractHours = table.Column<decimal>(nullable: false),
                    PerHourPay = table.Column<decimal>(nullable: false),
                    OvertimeRate = table.Column<decimal>(nullable: false),
                    KiwiSaver = table.Column<decimal>(nullable: false),
                    Union = table.Column<bool>(nullable: false),
                    ContractType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeContract", x => x.EmployeeContractId);
                });

            migrationBuilder.CreateTable(
                name: "EmployeePersonal",
                columns: table => new
                {
                    EmployeePersonalId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateOfBirth = table.Column<DateTime>(nullable: false),
                    Age = table.Column<int>(nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    IRD = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeePersonal", x => x.EmployeePersonalId);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    EmpId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    CreatedAtstr = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Username = table.Column<string>(nullable: true),
                    Designation = table.Column<string>(nullable: true),
                    EmployeeContractId = table.Column<int>(nullable: false),
                    EmployeePersonalId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.EmpId);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeeContract_EmployeeContractId",
                        column: x => x.EmployeeContractId,
                        principalTable: "EmployeeContract",
                        principalColumn: "EmployeeContractId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Employees_EmployeePersonal_EmployeePersonalId",
                        column: x => x.EmployeePersonalId,
                        principalTable: "EmployeePersonal",
                        principalColumn: "EmployeePersonalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Payslips",
                columns: table => new
                {
                    PayslipId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreatedBy = table.Column<string>(nullable: true),
                    ModifiedBy = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ModifiedAt = table.Column<DateTime>(nullable: false),
                    CreatedAtstr = table.Column<string>(nullable: true),
                    ContractedHours = table.Column<decimal>(nullable: false),
                    OvertimeHours = table.Column<decimal>(nullable: false),
                    TotalHours = table.Column<decimal>(nullable: false),
                    TotalMonthly = table.Column<decimal>(nullable: false),
                    ContractedEarning = table.Column<decimal>(nullable: false),
                    OvertimeEarning = table.Column<decimal>(nullable: false),
                    TotalEarning = table.Column<decimal>(nullable: false),
                    KiwiSaver = table.Column<decimal>(nullable: false),
                    UnionFee = table.Column<int>(nullable: false),
                    OtherCharges = table.Column<decimal>(nullable: false),
                    InHandPay = table.Column<decimal>(nullable: false),
                    PAYE = table.Column<decimal>(nullable: false),
                    TotalDeduction = table.Column<decimal>(nullable: false),
                    EmpId = table.Column<int>(nullable: false),
                    EmployeeEmpId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Payslips", x => x.PayslipId);
                    table.ForeignKey(
                        name: "FK_Payslips_Employees_EmployeeEmpId",
                        column: x => x.EmployeeEmpId,
                        principalTable: "Employees",
                        principalColumn: "EmpId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeeContractId",
                table: "Employees",
                column: "EmployeeContractId");

            migrationBuilder.CreateIndex(
                name: "IX_Employees_EmployeePersonalId",
                table: "Employees",
                column: "EmployeePersonalId");

            migrationBuilder.CreateIndex(
                name: "IX_Payslips_EmployeeEmpId",
                table: "Payslips",
                column: "EmployeeEmpId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Payslips");

            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "EmployeeContract");

            migrationBuilder.DropTable(
                name: "EmployeePersonal");
        }
    }
}
