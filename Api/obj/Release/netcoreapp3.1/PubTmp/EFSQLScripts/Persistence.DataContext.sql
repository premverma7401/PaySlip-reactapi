IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE TABLE [EmployeeContract] (
        [EmployeeContractId] int NOT NULL IDENTITY,
        [ContractHours] decimal(18,2) NOT NULL,
        [PerHourPay] decimal(18,2) NOT NULL,
        [OvertimeRate] decimal(18,2) NOT NULL,
        [KiwiSaver] decimal(18,2) NOT NULL,
        [Union] bit NOT NULL,
        [ContractType] int NOT NULL,
        CONSTRAINT [PK_EmployeeContract] PRIMARY KEY ([EmployeeContractId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE TABLE [EmployeePersonal] (
        [EmployeePersonalId] int NOT NULL IDENTITY,
        [DateOfBirth] datetime2 NOT NULL,
        [Age] int NOT NULL,
        [Phone] nvarchar(max) NULL,
        [IRD] nvarchar(max) NULL,
        [City] nvarchar(max) NULL,
        CONSTRAINT [PK_EmployeePersonal] PRIMARY KEY ([EmployeePersonalId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE TABLE [Employees] (
        [EmpId] int NOT NULL IDENTITY,
        [CreatedBy] nvarchar(max) NULL,
        [ModifiedBy] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [ModifiedAt] datetime2 NOT NULL,
        [CreatedAtstr] nvarchar(max) NULL,
        [FirstName] nvarchar(max) NULL,
        [LastName] nvarchar(max) NULL,
        [ImageUrl] nvarchar(max) NULL,
        [Email] nvarchar(max) NULL,
        [Username] nvarchar(max) NULL,
        [Designation] nvarchar(max) NULL,
        [EmployeeContractId] int NOT NULL,
        [EmployeePersonalId] int NOT NULL,
        CONSTRAINT [PK_Employees] PRIMARY KEY ([EmpId]),
        CONSTRAINT [FK_Employees_EmployeeContract_EmployeeContractId] FOREIGN KEY ([EmployeeContractId]) REFERENCES [EmployeeContract] ([EmployeeContractId]) ON DELETE CASCADE,
        CONSTRAINT [FK_Employees_EmployeePersonal_EmployeePersonalId] FOREIGN KEY ([EmployeePersonalId]) REFERENCES [EmployeePersonal] ([EmployeePersonalId]) ON DELETE CASCADE
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE TABLE [Payslips] (
        [PayslipId] int NOT NULL IDENTITY,
        [CreatedBy] nvarchar(max) NULL,
        [ModifiedBy] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [ModifiedAt] datetime2 NOT NULL,
        [CreatedAtstr] nvarchar(max) NULL,
        [ContractedHours] decimal(18,2) NOT NULL,
        [OvertimeHours] decimal(18,2) NOT NULL,
        [TotalHours] decimal(18,2) NOT NULL,
        [TotalMonthly] decimal(18,2) NOT NULL,
        [ContractedEarning] decimal(18,2) NOT NULL,
        [OvertimeEarning] decimal(18,2) NOT NULL,
        [TotalEarning] decimal(18,2) NOT NULL,
        [KiwiSaver] decimal(18,2) NOT NULL,
        [UnionFee] int NOT NULL,
        [OtherCharges] decimal(18,2) NOT NULL,
        [InHandPay] decimal(18,2) NOT NULL,
        [PAYE] decimal(18,2) NOT NULL,
        [TotalDeduction] decimal(18,2) NOT NULL,
        [EmpId] int NOT NULL,
        [EmployeeEmpId] int NULL,
        CONSTRAINT [PK_Payslips] PRIMARY KEY ([PayslipId]),
        CONSTRAINT [FK_Payslips_Employees_EmployeeEmpId] FOREIGN KEY ([EmployeeEmpId]) REFERENCES [Employees] ([EmpId]) ON DELETE NO ACTION
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE INDEX [IX_Employees_EmployeeContractId] ON [Employees] ([EmployeeContractId]);
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE INDEX [IX_Employees_EmployeePersonalId] ON [Employees] ([EmployeePersonalId]);
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    CREATE INDEX [IX_Payslips_EmployeeEmpId] ON [Payslips] ([EmployeeEmpId]);
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200926210633_updatedMig')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200926210633_updatedMig', N'3.1.5');
END;

GO

