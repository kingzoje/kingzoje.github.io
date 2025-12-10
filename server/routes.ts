import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Portfolio is a static site - no API routes needed
  // Contact uses mailto: link directly

  return httpServer;
}
