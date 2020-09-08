using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class deduction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "KiwiSaver",
                table: "Payslips",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "OtherCharges",
                table: "Payslips",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "PAYE",
                table: "Payslips",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "UnionFee",
                table: "Payslips",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "KiwiSaver",
                table: "EmployeeContract",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "Union",
                table: "EmployeeContract",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KiwiSaver",
                table: "Payslips");

            migrationBuilder.DropColumn(
                name: "OtherCharges",
                table: "Payslips");

            migrationBuilder.DropColumn(
                name: "PAYE",
                table: "Payslips");

            migrationBuilder.DropColumn(
                name: "UnionFee",
                table: "Payslips");

            migrationBuilder.DropColumn(
                name: "KiwiSaver",
                table: "EmployeeContract");

            migrationBuilder.DropColumn(
                name: "Union",
                table: "EmployeeContract");
        }
    }
}
