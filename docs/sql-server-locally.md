---
sidebar_position: 4
---

# Running SQL Server locally

## Getting Started

We're going to install SQL Server locally using Docker

## Pulling the image

```bash
docker pull mcr.microsoft.com/mssql/server:2019-latest
```

## Running SQL Server

The user is `sa`.
The password is `sql@Pass13`, but you can change it.

```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=sql@Pass13" -p 1401:1433 -d --name=sql_server mcr.microsoft.com/mssql/server:2019-latest
```

## SSMS

![SQL Server Management Studio](/img/tutorial/ssms.png)
