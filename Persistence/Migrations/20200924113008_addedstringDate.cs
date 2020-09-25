using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class addedstringDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedAtstr",
                table: "Payslips",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CreatedAtstr",
                table: "Employees",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAtstr",
                table: "Payslips");

            migrationBuilder.DropColumn(
                name: "CreatedAtstr",
                table: "Employees");
        }
    }
}
