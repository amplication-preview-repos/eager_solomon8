/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Visitor as PrismaVisitor } from "@prisma/client";

export class VisitorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VisitorCountArgs, "select">): Promise<number> {
    return this.prisma.visitor.count(args);
  }

  async visitors<T extends Prisma.VisitorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VisitorFindManyArgs>
  ): Promise<PrismaVisitor[]> {
    return this.prisma.visitor.findMany<Prisma.VisitorFindManyArgs>(args);
  }
  async visitor<T extends Prisma.VisitorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VisitorFindUniqueArgs>
  ): Promise<PrismaVisitor | null> {
    return this.prisma.visitor.findUnique(args);
  }
  async createVisitor<T extends Prisma.VisitorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VisitorCreateArgs>
  ): Promise<PrismaVisitor> {
    return this.prisma.visitor.create<T>(args);
  }
  async updateVisitor<T extends Prisma.VisitorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VisitorUpdateArgs>
  ): Promise<PrismaVisitor> {
    return this.prisma.visitor.update<T>(args);
  }
  async deleteVisitor<T extends Prisma.VisitorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VisitorDeleteArgs>
  ): Promise<PrismaVisitor> {
    return this.prisma.visitor.delete(args);
  }
}